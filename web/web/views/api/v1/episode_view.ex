defmodule App.Api.V1.EpisodeView do
  use App.Web, :view

  def render "index.json", %{episodes: episodes} do
    %{data: render_many(episodes, __MODULE__, "episode.json")}
  end

  def render "show.json", %{episode: episode} do
    %{data: render_one(episode, __MODULE__, "episode.json")}
  end

  def render "episode.json", %{episode: episode} do
    %{
      id: episode.id,
      headline: episode.headline,
      description: episode.description,
      duration: episode.duration,
      audio: episode.audio,
      authors: episode.authors,
      color: episode.color
    }
  end
end
