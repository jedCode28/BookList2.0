class BooksController < ApplicationController

  def app
    render component: "App"
  end

  def index 
    @books = Book.order(id: :asc)
    render json: @books
  end 

end
