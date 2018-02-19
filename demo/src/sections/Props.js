import React from 'react';

const Props = () => (
  <section>
    <h2>Props</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>PropTypes</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>hotkey</td>
        <td>
          <b>string</b>
        </td>
        <td>Mousetrap keys combination that will onHotkeyPressed</td>
      </tr>
      <tr>
        <td>onHotkeyPressed</td>
        <td>
          <b>func</b>
        </td>
        <td>Function that will be called after the hotkey is pressed</td>
      </tr>
      <tr>
        <td>children</td>
        <td>
          <b>element</b>
        </td>
        <td>React element in which one the tooltip will appear</td>
      </tr>
      <tr>
        <td>tooltipHotkey</td>
        <td>string [?]</td>
        <td>Mousetrap keys combination that will show all tooltips</td>
      </tr>
      <tr>
        <td>tooltipProps</td>
        <td>object [{'{}'}]</td>
        <td>Passed to the Tooltip of react-tippy in order to modify it</td>
      </tr>
      <tr>
        <td>disableTooltip</td>
        <td>bool [false]</td>
        <td>
          Disable the tooltip, so pressing tooltipHotkey will have no effect
        </td>
      </tr>
    </table>
  </section>
);

export default Props;
