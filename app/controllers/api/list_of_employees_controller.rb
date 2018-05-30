class Api::ListOfEmployeesController < ApplicationController

def index
  @employees = Employee.all  
  render json: @employees
end

end
