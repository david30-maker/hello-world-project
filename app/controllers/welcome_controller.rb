class WelcomeController < ApplicationController
    def index
      render plain: "Welcome to the Root Page"
    end
  
    def greeting
      render plain: "Random Greeting: Hello!"
    end
  end