class Api::EmployeesController < ApplicationController

    def index
        @shift = Shift.find(params[:shift_id])
        @employees = @shift.employees

        render json: @employees
    end

    def show
        @shift = Shift.find(params[:shift_id])
        @employee = @shift.employees.find(params[:id])

        render json: @employee
    end

    def create
        @shift = Shift.find(params[:shift_id])
        @new_employee = @shift.employees.create!(employee_params)
        
        render json: {
            employee: @new_employee
        }
    end

    def destroy
        @shift = Shift.find(params[:shift_id])
        @employee = @shift.employees.find(params[:id]).delete

        render status: :ok
    end

    def employee_params
        params.require(:employee).permit(:name, :position, :phone, :photo, :shift_id)
    end

end
