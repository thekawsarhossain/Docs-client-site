import { useEffect } from 'react'

const Charts = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d')
    // const labels = Utils.months({ count: 7 })
    const labels = [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
      'Week 9',
      'Week 10',
    ]
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    }
    const config = {
      type: 'line',
      data: data,
    }
    const myChart = new Chart(ctx, config).destroy()
    return function cleanup() {
      myChart.destroy()
    }
  }, [])
  return (
    <div>
      <canvas id="myChart" height="100" />
    </div>
  )
}

export default Charts
