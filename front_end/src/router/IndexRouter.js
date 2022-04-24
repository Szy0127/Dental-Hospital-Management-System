import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import MainRoute from './MainRoute';

const IndexRouter = () => (
  <BrowserRouter>
    <MainRoute/>
  </BrowserRouter>
)

export default IndexRouter;

