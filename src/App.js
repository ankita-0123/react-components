import Header from './components/Header';
import ContentData from './components/ContentData';
import React from 'react';




import Content from './components/Content';

const App = () => {
  const cards = ContentData.map(item => {
    return (
      <Content 
        key = {item.id}
        name = {item.name}
        imageUrl = {item.imageUrl}
        title={item.title}
        price= {item.price}
      />

    )
  })
  return (
    <>
    <Header />
    <section className='cards-list'>
    {cards}

    </section>
    
    
    </>
  )
}

export default App;
