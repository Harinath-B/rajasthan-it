import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-room',
  templateUrl: './mental-health.component.html',
  styleUrls: ['./mental-health.component.css']
})
export class MentalHealthComponent {
  username = 'ramesh';
  overallScore = 35;

  assessments = [
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
    // Add more assessments with scores here
  ];

}
