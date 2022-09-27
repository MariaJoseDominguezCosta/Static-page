import Artista from "./components/Artista";
import Layout from "./containers/Layout";
import React from 'react'

export const App = () => {
  return (
    <Layout>
      <h1>✨ LIDERES DE LA 4_th GENERACIÓN ✨</h1>
      <Artista />
    </Layout>
  )
}