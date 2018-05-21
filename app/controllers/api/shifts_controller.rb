class Api::ShiftsController < ApplicationController
    def index
        @shifts = Shift.all
        render json: @shifts
    end

    def create
        @shift = Shift.create!(shift_params)

        render json: @shift
    end

    def show
        @shift = Shift.find(params[:id])

        render json: @shift
    end

    def update
        @shift = Shift.find(params[:id])
        @shift.update!(shift_params)

        render json: @shift
    end

    def destroy
        @shift = Shift.find(params[:id]).delete

        render status: :ok
    end

    private

    def shift_params
        params.require(:shift).permit(:date, :time, :note, :employees)
    end

end
