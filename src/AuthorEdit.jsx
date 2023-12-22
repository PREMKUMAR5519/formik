import React from 'react'

function AuthorEdit({handleSubmit1,formData1,handleInputChange1}) {
  return (
    <div><div className='editingdiv' >
    <form onSubmit={handleSubmit1}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData1.name}
          onChange={handleInputChange1}
        />
      </label>
      <label>
      biograpgy:
        <input
          type="text"
          name="biography"
          value={formData1.biography}
          onChange={handleInputChange1}
        />
      </label>
      <label>
        DOB:
        <input
          type="date"
          name="selectedDate"
          value={formData1.selectedDate}
          onChange={handleInputChange1}
        />
      </label>
      <button type="submit">Update</button>
    </form>
    </div></div>
  )
}

export default AuthorEdit