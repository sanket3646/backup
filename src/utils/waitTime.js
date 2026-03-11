export function estimateWaitTime(queue, doctors) {
  const avgConsultTime = 6; // minutes

  if (doctors === 0) return null;

  const totalMinutes = (queue * avgConsultTime) / doctors;

  return Math.round(totalMinutes);
}
