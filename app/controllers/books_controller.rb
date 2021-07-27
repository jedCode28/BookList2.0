class BooksController < ApplicationController

  def app
    render component: "App"
  end

  def index 
    @books = Book.order(id: :desc)
    render json: @books
  end 

end
