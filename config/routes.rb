Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greetings/index'
    end
  end
  
  root "greetings#index"
end
