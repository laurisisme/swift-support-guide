## Inspiration
Parkinson’s patients often experience unpredictable “wearing-off” periods where medication effects fade and symptoms suddenly worsen. These fluctuations are hard to monitor continuously outside clinical settings, and caregivers are often unaware until symptoms become severe. We were inspired to build a system that can detect early signs of deterioration in real time, using wearable data, and provide timely support to both patients and caregivers.

## What it does
Offsense is a real-time monitoring and early-warning system for Parkinson’s symptom fluctuations.
- Continuously analyzes wearable sensor data (movement patterns)
- Estimates OFF-risk (medication wearing-off probability) using machine learning
- Sends alerts to caregivers when risk is sustained or worsening
- Includes a confirmation loop to reduce false alarms
- Logs events to generate weekly/monthly reports for doctors
- Designed to support early intervention and better treatment decisions

## How we built it
Frontend
- Built using TypeScript, React, and CSS
- Responsive UI for patients and caregivers
- Real-time visualization of risk states and alerts

Machine Learning Pipeline
- Data source: Parkinson's Disease Smartwatch Dataset (PADS)
- Converted raw sensor streams into rolling time windows (60s)
- Extracted motion-based features:
   + movement variability (std, RMS)
   + signal magnitude
   + tremor-related dynamics
- Trained an XGBoost model to estimate OFF-risk probability
- Added temporal smoothing to stabilize predictions and reduce false alarms

System Design
- Hybrid architecture:
   + ML models for signal analysis and prediction
   +  rule-based logic for alerting and escalation
- Designed to integrate future multimodal data (HRV, EDA, skin temperature)

## Challenges we ran into
- Lack of labeled ON/OFF data: Public datasets do not provide direct medication state labels
- Signal noise and variability: Movement data varies significantly across individuals and contexts
- False positives: Normal activities (e.g., walking, exercise) can resemble symptom fluctuations
- Real-time constraints: Needed a model that is both accurate and lightweight for continuous monitoring

## Accomplishments that we're proud of
- Built a complete end-to-end pipeline from raw sensor data to real-time alerts
- Successfully applied XGBoost to time-series-derived features for health monitoring
- Designed a system that balances technical feasibility and clinical relevance
- Created a scalable architecture that can extend to multimodal wearable data
- Delivered a working prototype within hackathon constraints

## What we learned
- Feature engineering is critical when working with wearable time-series data
- Simpler models like XGBoost can outperform complex models in low-data settings
- Personalization is essential for healthcare applications
- Data limitations often shape system design more than model choice
- Bridging ML outputs with real-world decision-making requires thoughtful system design

## What's next for Offsense
- Integrate medication logs to enable true ON/OFF state modeling
- Add multimodal signals: HRV, EDA, and skin temperature
- Implement personalized baseline learning for each patient
- Explore time-series models (TCN, 1D-CNN) for sequence learning
- Improve alert logic with adaptive thresholds and user feedback loops
- Expand frontend features with richer dashboards and insights for doctors and caregivers
