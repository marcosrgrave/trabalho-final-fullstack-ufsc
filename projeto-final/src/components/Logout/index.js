import React from "react";
import Swal from "sweetalert2";

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Realizando Logout",
      text: "Deseja realizar o logout?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          timer: 1000,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("is_authenticated", false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <button
      style={{ marginLeft: "12px" }}
      className="muted-button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
