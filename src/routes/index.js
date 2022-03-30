import Principal from '../Principal';
import Projects from '../Projects';
import NotFound from '../NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RouteList() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
    </BrowserRouter>
  );
}