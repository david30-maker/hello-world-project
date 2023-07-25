class ApplicationController < ActionController::Base
  def index
    render json: { message: 'Welcome to my new Rails app!' }
  end
end
