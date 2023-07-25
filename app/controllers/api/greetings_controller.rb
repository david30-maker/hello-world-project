class Api::GreetingsController < ApplicationController
    def random_greeting
        @greeting = Greeting.order("RANDOM()").first
        render json: { message: random_greeting.message }
    end
end
