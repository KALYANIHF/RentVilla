import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    if (!auth.currentUser) {
      setDisplayName("not loged in");
    } else {
      setDisplayName(auth.currentUser.displayName);
    }
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <h2>{displayName}</h2>
    </div>
  );
}

export default Profile;
