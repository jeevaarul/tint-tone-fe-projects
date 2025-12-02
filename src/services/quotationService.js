import apiClient from '../api/axiosConfig';
import { buildQueryString } from '../utils/api';

const ENDPOINTS = {
  QUOTATIONS: '/quotations',
  QUOTATION_BY_ID: (id) => `/quotations/${id}`,
  QUOTATION_PDF: (id) => `/quotations/${id}/pdf`,
};

export const quotationService = {
  /**
   * Get paginated quotations with filters
   */
  getQuotations: async (params = {}) => {
    const queryString = buildQueryString(params);
    const response = await apiClient.get(`${ENDPOINTS.QUOTATIONS}?${queryString}`);
    return response.data;
  },

  /**
   * Get quotation by ID
   */
  getQuotationById: async (id) => {
    const response = await apiClient.get(ENDPOINTS.QUOTATION_BY_ID(id));
    return response.data;
  },

  /**
   * Create new quotation
   */
  createQuotation: async (quotationData) => {
    const response = await apiClient.post(ENDPOINTS.QUOTATIONS, quotationData);
    return response.data;
  },

  /**
   * Update quotation
   */
  updateQuotation: async (id, quotationData) => {
    const response = await apiClient.put(ENDPOINTS.QUOTATION_BY_ID(id), quotationData);
    return response.data;
  },

  /**
   * Delete quotation
   */
  deleteQuotation: async (id) => {
    const response = await apiClient.delete(ENDPOINTS.QUOTATION_BY_ID(id));
    return response.data;
  },

  /**
   * Generate PDF for quotation
   */
  generatePDF: async (id) => {
    const response = await apiClient.get(ENDPOINTS.QUOTATION_PDF(id), {
      responseType: 'blob',
    });
    return response.data;
  },

  /**
   * Update quotation status
   */
  updateStatus: async (id, status) => {
    const response = await apiClient.patch(ENDPOINTS.QUOTATION_BY_ID(id), { status });
    return response.data;
  },

  /**
   * Duplicate quotation
   */
  duplicateQuotation: async (id) => {
    const response = await apiClient.post(`${ENDPOINTS.QUOTATION_BY_ID(id)}/duplicate`);
    return response.data;
  },

  /**
   * Send quotation via email
   */
  sendQuotation: async (id, emailData) => {
    const response = await apiClient.post(`${ENDPOINTS.QUOTATION_BY_ID(id)}/send`, emailData);
    return response.data;
  },
};