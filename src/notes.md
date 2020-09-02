            <label for="searchRadius">Please select a search radius (miles):</label><br/>
            <select name="searchRadius">
                <option value={signupForm.searchRadius} onChange={handleInputChange}>10</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>25</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>50</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>100</option>
            </select><br/>

-- can i make a form with drop down menu that sends selection to params 