const Flight = require('../models/flight');
const flightsRouter = require('express').Router()

// Create a new flight
flightsRouter.post('/', async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(400).json({ message: 'Error creating flight', error });
  }
})

// Get all flights
flightsRouter.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flights', error });
  }
})

// Get a flight by ID
flightsRouter.get('/:id', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching flight', error });
  }
})

// Update a flight by ID
flightsRouter.put('/:id', async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.status(200).json(flight);
  } catch (error) {
    res.status(400).json({ message: 'Error updating flight', error });
  }
})

// Delete a flight by ID
flightsRouter.delete('/:id', async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: 'Error deleting flight', error });
  }
})

module.exports = flightsRouter
