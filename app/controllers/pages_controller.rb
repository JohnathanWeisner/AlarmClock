class PagesController < ApplicationController
  respond_to :html, :js
  def index
    render 'index'
  end

  def process_time
    @time = Chronic.parse(params[:time])
    puts @time
    puts Time.now
    @time_left = @time - Time.now
    @time_left = @time_left.ceil
    @minutes, @seconds = @time_left.divmod(60);
    @hours, @minutes = @minutes.divmod(60); 
    @seconds = @seconds.ceil

    @hours = format_time(@hours)
    @minutes = format_time(@minutes)
    @seconds = format_time(@seconds)

    respond_with(@time_left, @hours, @minutes, @seconds) do |f|
      f.html { render :index }
    end
    # render 'index'
  end
end


def format_time(time)
  time.to_s.length == 1 ? "0" + time.to_s : time.to_s
end