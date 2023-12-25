import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userRole = useSelector((state) => state.userRole);

  return (
    <nav>
      {userRole === "guest" ? (
        <div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      ) : (
        <div>
          {/* Other navigation items for authenticated users */}
          <button>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
