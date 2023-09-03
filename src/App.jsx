import { Routes, Route, Navigate } from "react-router-dom";
import { Admin } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      {/* <Route path="/auth/*" element={<Auth />} /> */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default App;
