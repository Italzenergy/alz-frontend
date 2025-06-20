import React, { useState } from 'react';
import axios from 'axios';
import './CertificadosAlz.css'; // Importamos el CSS que acabamos de crear

function CertificadosAlt() {
  const [email, setEmail] = useState('');
  const [certificados, setCertificados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API = process.env.REACT_APP_API_URL;
const [showNoResultsModal, setShowNoResultsModal] = useState(false);
  const buscarCertificados = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCertificados([]); // Limpiamos resultados anteriores
    console.log("API URL:", process.env.REACT_APP_API_URL);
    try {
  const response = await axios.post(`${API}/api/certificados`, {
    email,
    
  });
  
  setCertificados(response.data);

  if (response.data.length === 0) {
    setShowNoResultsModal(true); // 👈 se muestra si no hay resultados
  }
} catch (err) {
  setError(err.response?.data?.error || 'Error al buscar certificados. Por favor, inténtelo de nuevo.');


    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="container">
      <h1>Buscar Certificados</h1>
      
      <form onSubmit={buscarCertificados}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo electrónico"
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar Certificados'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading && <div className="loading-indicator">Buscando tus certificados</div>}

      {!loading && certificados.length > 0 ? (
        <div className="resultados">
          <h2>Tus Certificados:</h2>
          <ul>
            {certificados.map((cert, index) => (
              <li key={index}>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {cert.nombre}
                </a>
                
              </li>
            ))}
          </ul>
          
        </div>
      ) : (
        !loading && !error && (
          <div className="no-results">
            <p>Ingresa tu correo electrónico para buscar tus certificados.</p>
            <p>Si ya lo hiciste y no encuentras resultados, verifica que el correo sea correcto.</p>
          </div>
        )
      )}
      {showNoResultsModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h3>No se encontraron certificados</h3>
      <p>No hay ningún PDF asociado al correo <strong>{email}</strong>.</p>
      <button onClick={() => setShowNoResultsModal(false)}>Cerrar</button>
    </div>
  </div>
)}

    </div>
  );
}

export default CertificadosAlt;