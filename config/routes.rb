Rails.application.routes.draw do

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
  
  root 'welcome#index'

  get '/greeting', to: 'welcome#index'

  

  
end
