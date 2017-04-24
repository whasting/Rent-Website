import React, { Component } from 'react';

class Breakdown extends Component {
    render() {
        return (
            <div className="breakdown">
                <div className="breakdown-inner">
                    <h4>Household Expenses</h4>
                    <table>
                        <tbody>
                        <tr>
                            <td>Rent</td>
                            <td>$3500.0</td>
                        </tr>
                        <tr>
                            <td>Utilities</td>
                            <td>$80.0</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>$50.0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Breakdown;