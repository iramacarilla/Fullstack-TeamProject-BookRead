const mongoose = require('mongoose');
  const { Schema } = mongoose;
  //const mongoosePaginate = require('mongoose-paginate-v2');  

  const bookSchema = new Schema({
    title:  {
      type: String,
      required: [true, 'Enter title of book'],
      minlength: [3, 'Title can\'t be smaller than 2 characters'],
      maxlength: [30, 'Title can\'t be longer than 30 characters'],
      unique: true
    },
      author: {
      type: String,
      minlength: [3, 'Author\'s name can\'t be smaller than 2 characters'],
      maxlength: [30, 'Author\'s name can\'t be longer than 30 characters'],
    },
    year:{
      type: Number,
      min: [1500, 'Wrong year'],
      max: [new Date().getFullYear(), 'Year can\'t be more than current']
     
    },
    numberOfPages:{
        type: Number,
        min: [10, 'Number of page can\'t be less than 10'],
        max: [33000, 'Number of page can\'t be more than 330000'],
        required: [true, 'Enter number of pages']
      },
    review:{
        type: String,
        default: '',
        maxlength: [3000, 'Title can\'t be longer than 3000 characters'],
    },
    rating: {
        type: Number,
        default: null,
        min: 0,
        max: 5
    },
    
    /*token: {
        type: Number,
    },*/
    readingStage: {
        type: String,
        enum:{ 
            values: ['done', 'reading', 'will read']
    },
    default: 'will read' 
    },
    /*creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
    }*/
  },
  { versionKey: false, timestamps: true }
  );
  
  //bookSchema.plugin(mongoosePaginate);



  module.exports = bookSchema