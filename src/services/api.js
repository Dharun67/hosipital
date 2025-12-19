const API_BASE_URL = 'https://hospitalmanagement-902b.onrender.com/api/v1';

const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export const doctorsAPI = {
  getAll: () => apiCall('/doctors/').then(data => data.data || []),
  create: (doctor) => apiCall('/doctors/doctor', {
    method: 'POST',
    body: JSON.stringify(doctor),
  }),
  update: (id, doctor) => apiCall(`/doctors/doctor/${id}`, {
    method: 'PUT',
    body: JSON.stringify(doctor),
  }),
  delete: (id) => apiCall(`/doctors/doctor/${id}`, {
    method: 'DELETE',
  }),
};

export const patientsAPI = {
  getAll: () => apiCall('/patients/').then(data => data.data || []),
  create: (patient) => apiCall('/patients/patient', {
    method: 'POST',
    body: JSON.stringify(patient),
  }),
  update: (id, patient) => apiCall(`/patients/patient/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patient),
  }),
  delete: (id) => apiCall(`/patients/patient/${id}`, {
    method: 'DELETE',
  }),
};

export const appointmentsAPI = {
  getAll: () => apiCall('/appointments/').then(data => data.data || []),
  create: (appointment) => apiCall('/appointments/appointment', {
    method: 'POST',
    body: JSON.stringify(appointment),
  }),
  update: (id, appointment) => apiCall(`/appointments/appointment/${id}`, {
    method: 'PUT',
    body: JSON.stringify(appointment),
  }),
  delete: (id) => apiCall(`/appointments/appointment/${id}`, {
    method: 'DELETE',
  }),
};

export const pharmacyAPI = {
  getAll: () => apiCall('/pharmacy/').then(data => data.data || []),
  create: (medicine) => apiCall('/pharmacy/medicine', {
    method: 'POST',
    body: JSON.stringify(medicine),
  }),
  update: (id, medicine) => apiCall(`/pharmacy/medicine/${id}`, {
    method: 'PUT',
    body: JSON.stringify(medicine),
  }),
  delete: (id) => apiCall(`/pharmacy/medicine/${id}`, {
    method: 'DELETE',
  }),
};

export const roomsAPI = {
  getAll: () => apiCall('/rooms/').then(data => data.data || []),
  create: (room) => apiCall('/rooms/room', {
    method: 'POST',
    body: JSON.stringify(room),
  }),
  update: (id, room) => apiCall(`/rooms/room/${id}`, {
    method: 'PUT',
    body: JSON.stringify(room),
  }),
  delete: (id) => apiCall(`/rooms/room/${id}`, {
    method: 'DELETE',
  }),
};

export const staffAPI = {
  getAll: () => apiCall('/staff/').then(data => data.data || []),
  create: (staff) => apiCall('/staff/staff', {
    method: 'POST',
    body: JSON.stringify(staff),
  }),
  update: (id, staff) => apiCall(`/staff/staff/${id}`, {
    method: 'PUT',
    body: JSON.stringify(staff),
  }),
  delete: (id) => apiCall(`/staff/staff/${id}`, {
    method: 'DELETE',
  }),
};