/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './topic-chip.scss';

interface TopicChipProps {
  emoji: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  disabled?: boolean; // Add the disabled prop
}

export const TopicChip: React.FC<TopicChipProps> = ({
  emoji,
  label,
  isSelected = false,
  onClick,
  disabled = false, // Add default value
}) => {
  return (
    <button
      className={`topic-chip ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      disabled={disabled} // Use the disabled prop
    >
      <span className="emoji">{emoji}</span>
      <span className="label">{label}</span>
    </button>
  );
};

export default TopicChip; // Export the interface
