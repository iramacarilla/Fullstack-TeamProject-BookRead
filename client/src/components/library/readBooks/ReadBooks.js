import React from 'react'
import ReadBookItem from './ReadBookItem';
import ReadBooksStyled from './ReadBooksStyled';

const ReadBooks = () => {
    return (
        <ReadBooksStyled className='container'>
        <h2>Прочитано</h2>  
      <div className='table-title'>
         <p>Назва книги</p>
         <p>Автор</p>
         <p>Рік</p>
         <p>Стор.</p>
         <p>Рейтинг книги</p>
      </div>
      <ReadBookItem/>
      <ReadBookItem/>
        </ReadBooksStyled>
    )
}

export default ReadBooks
            /*<div className='title'>
      <tr>
        <td>
        <div className='firstTd'>
        <img src={book} alt=''/>
        <p>Психбольница в руках пациентов...</p>
        </div>
        </td>
        <td>Купер Алан</td>
        <td>2009</td>
        <td>183</td>
        <td className='lastTd'> 
        <div className='star'>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        <img src={star} alt=''/>
        </div>
        <button type='button'>Резюме</button>
        </td>
    </tr>
                <h4>Назва книги</h4>
                <h4>Автор</h4>
                <h4>Рік</h4>
                <h4>Стор</h4>
                <h4>Рейтинг книги</h4>         
            </div>
            <div className='book-description'>
                <div >
                <img src={book} alt=''/>
                <p>Психбольница в руках пациентов...</p>
                </div>
                <p>Купер Алан</p>
                <h4>2009</h4>
                <h4>183</h4>
                <div>
                
                <button type='button'>Резюме</button>
                </div>        

            </div>*/
