const ProgressCircle = ({ task, doneSubtasks }) => {
  const totalSubtasks = task.subtasks.map((todo) => todo).length;
  const radius = 25; // Adjust the radius
  const strokeWidth = 4; // Adjust the stroke width
  const center = radius + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  let percentage = Math.floor((doneSubtasks / totalSubtasks) * 100);

  const dashOffset = circumference - (circumference * percentage) / 100;

  return (
    <svg width="100" height="100">
      {/* Outer circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="lightgrey"
        strokeWidth={strokeWidth}
      />

      {/* Inner circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="hsl(205, 100%, 53%)"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
      />

      <text x="28%" y="30%" textAnchor="middle" dy="0.1rem" fontSize="13px">
        {`${totalSubtasks > 0 ? percentage + "%" : "100%"}`}
      </text>
    </svg>
  );
};

export default ProgressCircle;
