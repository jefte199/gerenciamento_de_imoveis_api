import { Imoveis } from '../../model';
import { Request, Response } from 'express';

const extractImovelData = ({ body }: Request) => {
  const {
    area,
    price,
    rooms,
    rented,
    garage,
    address,
    comment,
    newHouse,
    bathroom,
    imageUrls,
    typeHouse,
    contactName,
    contactEmail,
    neighborhood,
    contactPhone,
    selectedDate,
    contactAddress,
  } = body;

  return {
    area,
    rooms,
    price,
    rented,
    garage,
    address,
    comment,
    newHouse,
    bathroom,
    imageUrls,
    typeHouse,
    contactName,
    contactEmail,
    neighborhood,
    contactPhone,
    selectedDate,
    contactAddress,
  };
};

export const ImoveisController = {
  store: async (req: Request, res: Response) => {
    try {
      const imovelData = extractImovelData(req);

      const createdImovel = await Imoveis.create(imovelData);
      res.status(201).json(createdImovel);
    } catch (error) {
      const message = 'Failed to create Imovel';
      res.status(500).json({ message, error: error.message });
    }
  },

  index: async (_req: Request, res: Response) => {
    try {
      const imoveis = await Imoveis.findOne();
      res.json(imoveis);
    } catch (error) {
      const message = 'Failed to fetch Imoveis';
      res.status(500).json({ message, error: error.message });
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const imovel = await Imoveis.findById(id);

      const messageNotFound = 'Imovel not found';
      const message = messageNotFound;
      if (!imovel) return res.status(404).json({ message });

      res.status(200).json(imovel);
    } catch (error) {
      const message = 'Failed to fetch Imovel';
      res.status(500).json({ message, error: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const imovelData = extractImovelData(req);

      const updateOptions = { new: true };
      const updatedImovel = await Imoveis.findByIdAndUpdate(
        id,
        imovelData,
        updateOptions
      );

      const messageNotFound = 'Imovel not found';
      const message = messageNotFound;
      if (!updatedImovel) return res.status(404).json({ message });

      res.status(200).json(updatedImovel);
    } catch (error) {
      const message = 'Failed to update Imovel';
      res.status(500).json({ message, error: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedImovel = await Imoveis.findByIdAndDelete(id);

      const messageNotFound = 'Imovel not found';
      const message = messageNotFound;
      if (!deletedImovel) return res.status(404).json({ message });

      res.status(204).end();
    } catch (error) {
      const message = 'Failed to delete Imovel';
      res.status(500).json({ message, error: error.message });
    }
  },
};
