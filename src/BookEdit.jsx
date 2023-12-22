import React from 'react'

function BookEdit({handleSubmit,formData,handleInputChange,setIsEditing}) {
  return (
    <div><div className='editingdiv' >
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </label>
      <label>
        ISBN:
        <input
          type="number"
          name="isbn"
          value={formData.isbn}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Selected Date:
        <input
          type="date"
          name="selectedDate"
          value={formData.selectedDate}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Update</button>
      <button onClick={()=>setIsEditing(false)} >x</button>
    </form>
    </div></div>
  )
}

export default BookEdit