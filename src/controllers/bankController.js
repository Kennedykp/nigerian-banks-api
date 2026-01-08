const supabase = require('../config/supabase');

// Get all banks with pagination and filtering
const getBanks = async (req, res) => {
    try {
        const { type, limit = 20, offset = 0 } = req.query;

        let query = supabase
            .from('banks')
            .select('*')
            .eq('status', 'active')
            .range(offset, offset + limit - 1);

        if (type) {
            query = query.eq('type', type);
        }

        const { data, error } = await query;

        if (error) throw error;

        res.json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get single bank by ID
const getBankById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('banks')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        if (!data) {
            return res.status(404).json({ success: false, error: 'Bank not found' });
        }

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Create a new bank
const createBank = async (req, res) => {
    try {
        const { name, slug, code, type, logo_url, website } = req.body;

        // Basic validation
        if (!name || !slug || !type || !logo_url) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        const { data, error } = await supabase
            .from('banks')
            .insert([{ name, slug, code, type, logo_url, website }])
            .select()
            .single();

        if (error) throw error;

        res.status(201).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a bank
const updateBank = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const { data, error } = await supabase
            .from('banks')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete (soft delete) a bank
const deleteBank = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('banks')
            .update({ status: 'inactive' })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        res.json({ success: true, message: 'Bank deactivated successfully', data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getBanks,
    getBankById,
    createBank,
    updateBank,
    deleteBank
};
