// Simple API connection - just add this file
const API_URL = 'https://hospitalmanagement-902b.onrender.com/api/v1';

// Get doctors from backend
export function getDoctors() {
  return fetch(`${API_URL}/doctors/`)
    .then(response => response.json())
    .then(data => data.data || []);
}

// Add new doctor to database
export function addDoctor(doctor) {
  return fetch(`${API_URL}/doctors/doctor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(doctor)
  }).then(response => response.json());
}

// Get patients from backend
export function getPatients() {
  return fetch(`${API_URL}/patients/`)
    .then(response => response.json())
    .then(data => data.data || []);
}

// Add new patient to database
export function addPatient(patient) {
  return fetch(`${API_URL}/patients/patient`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patient)
  }).then(response => response.json());
}

// Get appointments from backend
export function getAppointments() {
  return fetch(`${API_URL}/appointments/`)
    .then(response => response.json())
    .then(data => data.data || []);
}

// Add new appointment to database
export function addAppointment(appointment) {
  return fetch(`${API_URL}/appointments/appointment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointment)
  }).then(response => response.json());
}

// Get pharmacy data
export function getPharmacy() {
  return fetch(`${API_URL}/pharmacy/`)
    .then(response => response.json())
    .then(data => data.data || []);
}

// Get rooms data
export function getRooms() {
  return fetch(`${API_URL}/rooms/`)
    .then(response => response.json())
    .then(data => data.data || []);
}

// Get staff data
export function getStaff() {
  return fetch(`${API_URL}/staff/`)
    .then(response => response.json())
    .then(data => data.data || []);
}