package com.stackroute.search.service;

import com.stackroute.search.exception.DonorsNotFoundException;
import com.stackroute.search.models.Donor;
import com.stackroute.search.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService {

    private DonationRepository donorRepository;

    public ChatServiceImpl(DonationRepository donorRepository) {
        this.donorRepository = donorRepository;
    }

    @Override
    public List<Donor> retrieveDonors(String name) throws DonorsNotFoundException {
        try {
            List<Donor> donorList = donorRepository.retrieveDonors(name);
            System.out.println(donorList);
            return donorList;
        }
        catch(Exception e) {
            throw new DonorsNotFoundException();
        }
    }

    @Override
    public List<Donor> retrieveDonorsByBloodAndOrgan(String blood, String organ) throws DonorsNotFoundException {
        try {
            List<Donor> donorList = donorRepository.retrieveDonorsByBloodAndOrgan(blood, organ);
            System.out.println(donorList);
            return donorList;
        }
        catch(Exception e) {
            throw new DonorsNotFoundException();
        }
    }
}