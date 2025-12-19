import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/header.jsx'
import './App.css'
import { useEffect, useState } from 'react';
import Pharmacy from './pages/pharmacy.jsx';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  let [data , setData] = useState({
    hospital: {},
    departments: [],
    doctors: [],
    patients: [],
    appointments: [],
    pharmacy: [],
    billing: [],
    rooms: [],
    staff: []
  });

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
          // Fetch all data from different endpoints
          const [hospitalRes, doctorsRes, patientsRes, appointmentsRes, staffRes, pharmacyRes, roomsRes] = await Promise.all([
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/hospital/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/doctors/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/patients/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/appointments/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/staff/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/pharmacy/"),
            fetch("https://hospitalmanagement-902b.onrender.com/api/v1/rooms/")
          ]);
          
          const [hospitalData, doctorsData, patientsData, appointmentsData, staffData, pharmacyData, roomsData] = await Promise.all([
            hospitalRes.json(),
            doctorsRes.json(),
            patientsRes.json(),
            appointmentsRes.json(),
            staffRes.json(),
            pharmacyRes.json(),
            roomsRes.json()
          ]);
          
          const combinedData = {
            hospital: hospitalData.data?.[0] || {},
            departments: [],
            doctors: doctorsData.data || [],
            patients: patientsData.data || [],
            appointments: appointmentsData.data || [],
            pharmacy: pharmacyData.data || [],
            billing: [],
            rooms: roomsData.data || [],
            staff: staffData.data || []
          };
          
          setData(combinedData);
          console.log(combinedData);
      } 
      catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  fetchData();
}, [] );
console.log(data);
  return (
    <div className="App">
      {location.pathname !== '/login' && <Header user={user} onLogout={handleLogout} />}
      <Outlet context={{data, user, onLogin: handleLogin}}></Outlet>
    </div>
  )
}

export default App
