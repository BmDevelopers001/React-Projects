import { useState } from 'react';
import menu, { menuType } from './data';
import Menu from './Components/Menu';
import Categories from './Components/Categories';

const allCategories : string[] = ['all', ...new Set(menu.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState<menuType[]>(menu);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category : string) => {
    if(category === 'all'){
      setMenuItems(menu);
      return
    }

    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App
