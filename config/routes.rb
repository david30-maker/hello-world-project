Rails.application.routes.draw do
  root 'welcome#index'

  # get '/greeting', to: 'welcome#greeting'
  get '/greeting', to: 'welcome#index'

  get '*path', to: 'application#index', via: :all

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
end
