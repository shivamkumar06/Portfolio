import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-wrap">
      <h2>
        Days I <span>code</span>
      </h2>
      <GitHubCalendar
        username="shivamkumar06"
        blockSize={14}
        blockMargin={4}
        colorScheme="light"
        theme={{
          light: ["#e8e6df", "#99e6db", "#4db8ab", "#0f766e", "#0a4f4a"],
        }}
        fontSize={14}
      />
    </div>
  );
}

export default Github;
