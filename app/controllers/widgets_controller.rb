class WidgetsController < ApplicationController
  def index
    render json: [
      { name: 'abc', value: '123' },
      { name: 'def', value: '456' }
    ]
  end
end
