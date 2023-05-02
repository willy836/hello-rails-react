class Api::V1::GreetingsController < Api::V1::ApplicationController
  def index
    @greeting = Greeting.all.order('RANDOM()').limit(1)
    render json: @greeting
  end
end
