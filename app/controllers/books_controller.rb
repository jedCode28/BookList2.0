class BooksController < ApplicationController

  def app
    render component: "App"
  end

  def index 
    @books = Book.order(id: :asc)
    render json: @books
  end 

  def create
    book = Book.new(book_params)
    if book.save
      render json: book  
    else 
      render json: { errors: book.errors }, status: :unprocessable_entity
    end
  end 

  def update
    @book = Book.find(params[:id])

    if(@book.update(book_params))
      render json: @book
    else 
      render json: {error: 422, message: @book.errors.full_messages}
    end 
  end 

  def destroy
    @book = Book.find(params[:id]).destroy
    render json: @book
  end 

  private 

  def book_params
    params.require(:book).permit(:title, :author)
  end 

end
