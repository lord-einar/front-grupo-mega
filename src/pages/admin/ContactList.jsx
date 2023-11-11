import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactListTable from "../../components/ContactListTable";

export const ContactList = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/proveedores").then((data) => {
      setContactos(data.data);
    }).then(data => {
        console.log(contactos)
    });
  }, []);

  return (
    <div className="bg-secondary-800 p-8 rounded-xl">
      <h2 className="text-2xl border-b">Lista de contactos</h2>
      <div>
        <ContactListTable contactos={contactos} />
      </div>
    </div>
  );
};
