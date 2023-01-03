const mf = (time: number) => Math.floor(time);


export const transforTrackDuration = (duration: number) => {
  return `${mf(duration / 60)}:${mf(duration) - mf(duration / 60) * 60}`
}

export const currentTrackMinutes = (time: number) => {
  return `${time < 60 ? '0' : `${mf(time / 60)}`}`;
}

export const currentTrackSeconds = (time: number) => {
  const secWithoutMin = mf(time) - mf(time / 60) * 60;
  return `${time < 60 ? mf(time) < 10 ? `0${mf(time)}` : mf(time) : secWithoutMin < 10 ? `0${secWithoutMin}` : secWithoutMin}`;
}

export const currentTrackTime = (time: number) => {
  return `${currentTrackMinutes(time)}:${currentTrackSeconds(time)}`;
}