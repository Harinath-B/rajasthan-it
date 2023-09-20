import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-room',
  templateUrl: './mental-health-doc.component.html',
  styleUrls: ['./mental-health-doc.component.css']
})
export class MentalHealthDocComponent {
  username = 'suresh';
  overallScore = 35;
  flag = false;
  students = [
    { name: 'Manja', marks: [
      { name: 'Emotional Stability', score: 80 },
      { name: 'Bipolar Disorder', score: 70 },
      { name: 'Anxiety', score: 85 },
      { name: 'Depression', score: 75 },
      { name: 'Schizophrenia', score: 60 },
      { name: 'Eating Disorders', score: 70 },
      { name: 'Substance Abuse', score: 65 },
      { name: 'Post-Traumatic Stress Disorder', score: 80 },
      { name: 'Obsessive-Compulsive Disorder', score: 90 },
      { name: 'Attention-Deficit/Hyperactivity Disorder', score: 75 },
      { name: 'Phobias', score: 70 },
      { name: 'Borderline Personality Disorder', score: 65 },
      { name: 'Dissociative Disorders', score: 60 },
      { name: 'Panic Disorder', score: 75 },
      { name: 'Generalized Anxiety Disorder', score: 85 },
      { name: 'Social Anxiety Disorder', score: 70 },
      { name: 'Binge-Eating Disorder', score: 75 },
      { name: 'Autism Spectrum Disorder', score: 80 },
      { name: 'Mood Disorders', score: 70 },
    ] },
    { name: 'Maakan', marks: [
      { name: 'Emotional Stability', score: 80 },
      { name: 'Bipolar Disorder', score: 70 },
      { name: 'Anxiety', score: 85 },
      { name: 'Depression', score: 75 },
      { name: 'Schizophrenia', score: 60 },
      { name: 'Eating Disorders', score: 70 },
      { name: 'Substance Abuse', score: 65 },
      { name: 'Post-Traumatic Stress Disorder', score: 80 },
      { name: 'Obsessive-Compulsive Disorder', score: 90 },
      { name: 'Attention-Deficit/Hyperactivity Disorder', score: 75 },
      { name: 'Phobias', score: 70 },
      { name: 'Borderline Personality Disorder', score: 65 },
      { name: 'Dissociative Disorders', score: 60 },
      { name: 'Panic Disorder', score: 75 },
      { name: 'Generalized Anxiety Disorder', score: 85 },
      { name: 'Social Anxiety Disorder', score: 70 },
      { name: 'Binge-Eating Disorder', score: 75 },
      { name: 'Autism Spectrum Disorder', score: 80 },
      { name: 'Mood Disorders', score: 70 },
    ] },
  ];

  selectedStudentMarks: { name: string; score: number }[] = [];

  showStudentMarks(student: { name: string; marks: { name: string; score: number }[] }) {
    this.selectedStudentMarks = student.marks;
    this.flag = true;
  }

}
