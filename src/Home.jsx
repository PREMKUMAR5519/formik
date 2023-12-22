import React, { useState } from 'react'
import Book from './Book'
import Author from './Author'
import './Home.css'
import BookEdit from './BookEdit'
import AuthorEdit from './AuthorEdit'

export default function Home() {
  const list =[{
    id:1,
    title: "lord rings",
    author: "J.R.R. Tolkien",
    isbn: 4125,
    selectedDate: "26-07-1952"
  }]
  const list1 =[{
    id:1,
    name: "J.R.R. Tolkien",
    selectedDate: "01-03-1892",
    biography: "writer and philologist",
  }]
  const initialFormData = {
    id: null,
    title: '',
    author: '',
    isbn: '',
    selectedDate: '',
  };
  const initialFormData1 = {
    id: null,
    name: '',
    selectedDate: '',
    biography: '',
  };
  

  const [formData, setFormData] = useState(initialFormData);
  const [formData1, setFormData1] = useState(initialFormData1);
  const [blist, setBlist] = useState(list)
  const [btn,setBtn] = useState(false)
  const [alist, setAlist] = useState(list1)
  const[edit,setEdit]=useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing1, setIsEditing1] = useState(false);


  const [book, setBook] = useState(false)
  const [author, setAuthor] = useState(false)
  const handledelete=(index)=>{
    const updatedElements = blist.filter((_, i) => i !== index);

     setBlist(updatedElements)
   
     
  }
  const handleDelete1 = (index) => {
    const updatedElements = alist.filter((_, i) => i !== index);

    setAlist(updatedElements)
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setBlist((prevList) =>
        prevList.map((item) => (item.id === formData.id ? formData : item))
      );
      setIsEditing(false);
    } else {
      setBlist([...list, { ...formData, id: new Date().getTime() }]);
    }

    setFormData(initialFormData);
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();

    if (isEditing1) {
      setAlist((prevList) =>
        prevList.map((item) => (item.id === formData1.id ? formData1 : item))
      );
      setIsEditing1(false);
    } else {
      setAlist([...list1, { ...formData1, id: new Date().getTime() }]);
    }

    setFormData1(initialFormData1);
  };
  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };
  const handleEdit1 = (item) => {
    setFormData1(item);
    setIsEditing1(true);
  };

   return (
    <div >
      <div className='library' >
      LIBRARY
      </div>
      <div className='main'>
        <button onClick={() => setBook(true)} >Book +</button>
        <button onClick={() => setAuthor(true)}>Author +</button>
      </div >
      <div className='booksection' >
      <h3 >BOOK SECTION</h3>
      </div>
      {isEditing?(<BookEdit  setIsEditing={setIsEditing} handleInputChange={handleInputChange} formData={formData} handleSubmit={handleSubmit} />):null}
      <div className='second' >   
        <div className='bookbox' >
          {blist.map((item, index) => (
            <div onMouseEnter={()=>setBtn(true)} onMouseLeave={()=>setBtn(false)} className='bookbox2' key={index} >
              <p className='titlebook' >{item.title}</p>
              {btn?(<div className='hoverbth' ><button onClick={()=>handleEdit(item)} className='edit' ><i class="bi bi-credit-card-2-front"></i></button><span><button onClick={()=>{handledelete(index)}} className='delete' ><i class="bi bi-trash"></i></button></span></div>):(null)}
              <div className='bookdiv' ><p >AUTHOR:{item.author}</p>
                <p>ISBN:{item.isbn}</p>
                <p>PUBLISHED:{item.selectedDate}</p></div>
               
            </div>
          ))}
        </div>

      </div>
      
      {book ? (<Book blist={blist} setBlist={setBlist} setBook={setBook} book={book} />) : (null)}
      {author ? (<Author alist={alist} setAlist={setAlist} author={author} setAuthor={setAuthor} />) : (null)}
    
    <div className='authordiv' >
      <div className='authdiv' >
      <h3 className='auth' >AUTHOR SECTION</h3>
      </div>
      {isEditing1?( <AuthorEdit handleInputChange1={handleInputChange1} formData1={formData1} handleSubmit1={handleSubmit1}  />):null}
      <div className='authorbox' >
          {alist.map((item, index) => (
            <div className='authorbox2'  onMouseEnter={()=>setEdit(true)} onMouseLeave={()=>setEdit(false)}  key={index} >
              <p className='nametit' >NAME:{item.name}</p>
              <p >DOB:{item.selectedDate}</p>
                <p>Bio:{item.biography}</p>
                <div className='hoverbutton' > 
                {edit?(<div className='hoverbtn1' ><button onClick={()=>handleEdit1(item)} className='edit1' ><i class="bi bi-credit-card-2-front"></i></button><span><button onClick={()=>{handleDelete1(index)}} className='delete1' ><i class="bi bi-trash"></i></button></span></div>):(null)}

                </div>

            </div>
              ))}
        </div>
    </div>
    </div>
  )
}
