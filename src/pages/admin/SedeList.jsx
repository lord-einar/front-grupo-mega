import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactListTable from "../../components/ContactListTable";
import { SedeListTable } from "../../components/SedeListTable";

export const SedeList = () => {
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/sedes").then((data) => {
      setSedes(data.data);
    }).then(data => {
        console.log(sedes)
    });
  }, []);

  return (
    <div className="bg-secondary-800 p-8 rounded-xl">
      <h2 className="text-2xl border-b">Lista de contactos</h2>
      <div>
        <SedeListTable sedes={sedes} />
      </div>
    </div>
  );
};