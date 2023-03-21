from django.shortcuts import render
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
import cv2
import threading
import tensorflow as tf
import mediapipe as mp
import csv
import numpy as np
from django.http.response import JsonResponse


template = ['xxx']

cap = cv2.VideoCapture(0)

cap.set(cv2.CAP_PROP_FRAME_HEIGHT,720)
cap.set(cv2.CAP_PROP_FRAME_WIDTH,1280)
cap.set(cv2.CAP_PROP_FOURCC,0x32595559)
cap.set(cv2.CAP_PROP_FPS,25)
cap.set(cv2.CAP_PROP_BUFFERSIZE, 2)



mp_holistic = mp.solutions.holistic
mp_drawing = mp.solutions.drawing_utils

def mediapipe_detection(image, model):
    if image is not None:
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) # COLOR CONVERSION BGR 2 RGB
        image.flags.writeable = False                  # Image is no longer writeable
        results = model.process(image)                 # Make prediction
        image.flags.writeable = True                   # Image is now writeable 
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR) # COLOR COVERSION RGB 2 BGR
        return image, results

def extract_keypoints(results):
    pose = np.array([[res.x, res.y, res.z, res.visibility] for res in results.pose_landmarks.landmark]).flatten() if results.pose_landmarks else np.zeros(33*4)
    face = np.array([[res.x, res.y, res.z] for res in results.face_landmarks.landmark]).flatten() if results.face_landmarks else np.zeros(468*3)
    lh = np.array([[res.x, res.y, res.z] for res in results.left_hand_landmarks.landmark]).flatten() if results.left_hand_landmarks else np.zeros(21*3)
    rh = np.array([[res.x, res.y, res.z] for res in results.right_hand_landmarks.landmark]).flatten() if results.right_hand_landmarks else np.zeros(21*3)
    return np.concatenate([pose, face, lh, rh])

class VideoCamera(object):
    def __init__(self):
        pass
    #     self.video = cv2.VideoCapture(0)
    #     (self.grabbed, self.frame) = self.video.read()
    #     threading.Thread(target=self.update, args=()).start()

            
    # def __del__(self):
    #     self.video.release()

    # def get_frame(self):
    #     image = self.frame
    #     _, jpeg = cv2.imencode('.jpg', image)
    #     return jpeg.tobytes()

    # def update(self):
    #     while True:
    #         (self.grabbed, self.frame) = self.video.read()


# def gen(camera):
#     while True:
#         frame = camera.get_frame()
#         yield(b'--frame\r\n'
#               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
        

def gen_frames(self):  # generate frame by frame from camera

    sentence = []
    sequence = []
    sequence_length = 40
    threshold = 0.90
    f = open('./static/actions.csv', 'r')
    reader = csv.reader(f)
    actions = []
    for word in reader:
        actions.append(word[0])
    f.close()
    model = tf.keras.models.load_model("static/conv-rnn-model.h5")
    while True:
            # Capture frame-by-frame
        with mp_holistic.Holistic(min_detection_confidence=0.77, min_tracking_confidence=0.77) as holistic:
            success, frame = cap.read()
            if not success:
                break
            image, results = mediapipe_detection(frame, holistic)
            keypoints = extract_keypoints(results)
            sequence.append(keypoints)
            sequence = sequence[-sequence_length:]
            if len(sequence) == sequence_length:
                res = model.predict(np.expand_dims(sequence, axis=0))[0]
                if res[np.argmax(res)] > threshold: 
                    tmp = actions[np.argmax(res)]
                    if(tmp == 'Idle'):
                        sentence = [tmp]
                    if(len(sentence) > 0):
                        if(not(sentence[-1] == tmp)):
                            sentence.append(tmp)
                    else:
                        sentence.append(tmp)
                    if(len(sentence) > 1 and sentence[-2] == 'Idle' and tmp != 'Idle'):
                            del sentence[-2]             
                if len(sentence) > 3: 
                    sentence = sentence[-1:]
            global template
            template = sentence
            print(template)
            cv2.putText(image,' '.join(sentence), (3,85), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 255), 2, cv2.LINE_AA)
            ret,buffer=cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')



@gzip.gzip_page
def livefe(request):
    try:
        cam = VideoCamera()
        return StreamingHttpResponse(gen_frames(cam), content_type="multipart/x-mixed-replace;boundary=frame")
    except:  # This is bad! replace it with proper handling
        pass

def action(request, id=0):
    print(template)
    return JsonResponse(template, safe=False)

def index(request, *args, **kwargs):
    return render(request, 'index.html', {'sentence': template})